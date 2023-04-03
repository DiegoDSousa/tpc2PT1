
import DisciplinaForm  from './DisciplinaForm';


const NewComponent = (props) => {

 const guardarDisciplina = (disci) => {
  props.onAddDisciplina(disci)
  console.log(disci);
 }
 const control=true
 if(control){
  return (
    <div className='new-disciplina'>
      <DisciplinaForm onGuardarDisciplina={ guardarDisciplina } />
    </div>
  );
 }
  
};

export default NewComponent;