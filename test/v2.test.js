'use strict';
const {test,after}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),os=require('node:os'),path=require('node:path'),{DatabaseSync}=require('node:sqlite');
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'skills-v2-')),db=new DatabaseSync(path.join(tmp,'t.sqlite'));db.exec('PRAGMA foreign_keys=ON');const {init,handle}=require('../api');init(db);after(()=>{db.close();fs.rmSync(tmp,{recursive:true,force:true})});
test('V2 perfiles, autoevaluación, metas y evidencia',()=>{
 let x=handle(db,'GET','/api/people/1/profile',null,{}).data;assert.equal(x.assessments.length,5);
 assert.equal(handle(db,'POST','/api/people/1/assessment',null,{skill:'Inglés técnico',score:3}).data.saved,true);
 assert.equal(handle(db,'GET','/api/people/1/profile',null,{}).data.assessments.find(x=>x.skill==='Inglés técnico').score,3);
 let goal=handle(db,'POST','/api/people/1/goals',null,{title:'Documentar prueba de sistema',due_date:'2027-03-01'});assert.equal(goal.status,201);
 assert.equal(handle(db,'PATCH',`/api/goals/${goal.data.id}`,null,{done:true}).data.saved,true);
 assert.equal(handle(db,'POST','/api/people/1/notes',null,{kind:'evidencia',note:'Documentación de ensayo validada'}).status,201);
 x=handle(db,'GET','/api/people/1/profile',null,{}).data;assert.ok(x.goals.some(y=>y.id===goal.data.id&&y.done));assert.ok(x.notes.some(y=>y.note.includes('ensayo')));
 assert.ok(handle(db,'GET','/api/people/1/export',null,{}).csv.includes('Autoevaluación'));
});
