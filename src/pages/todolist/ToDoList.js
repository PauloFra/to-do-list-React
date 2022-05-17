
import DivAside from '../../components/DivAside/DivAside'
import { connect } from 'react-redux'
import ModalLeft from '../../components/ModalLeft/ModalLeft'
import { 
DivLeft,
DivHeader,
DivTopDo,
ButtonConcluido,
DivDo,
DivTextDo,
Button,
DivInfos,
DivAllContent } from './toDoList.styles'
function ToDoList({list ,dispatch} = list) { 
  const {modal} = list
  console.log('dispatch', dispatch);
  
  console.log('list', list.list);

  function setModal(){
    const SET_MODAL = {
      type:'SET_MODAL',
      modal:true
    }
    dispatch(SET_MODAL)
  }
  function AlterValue(item , event){
    event.target.disabled = true;
    event.target.textContent = 'Concluído';
    item.status = 'Concluído'
  }
  return (
    <DivAllContent>
      <DivLeft>
        <DivHeader>
         <DivInfos>
         <div>
            <h1>To-do-List</h1>
          </div>
          <div>
            <Button onClick={()=>setModal()}>Adicionar</Button>
            {/* <Button>Filtrar</Button> */}
          </div>
         </DivInfos>
          {/* <div>
            <select name="" id="">
              <option value="1">Teste 1</option>
              <option value="2">Teste 2</option>
            </select>
            <input type="text" placeholder='Search'/>
          </div> */}
        </DivHeader>
        <hr />
        {list.list.length > 0 
        ?
         list.list.map((item , index) => (
          <DivDo key={index}>
            <DivTopDo>
              <h3><span>{item.status}</span> {item.title}</h3>
              <p>{item.category}</p>
              <p>{item.data}</p>
              <p>{item.label}</p>
              {item.status === 'Pendente' && 
              <>
                <ButtonConcluido onClick={(event)=> AlterValue(item , event) }>Concluir</ButtonConcluido>
              </>
              }
              </DivTopDo>
            <DivTextDo>
              <p>{item.detail}</p>
            </DivTextDo>
        </DivDo>
         ))
        :
        <DivDo>
          <h3>Nenhum to-do cadastrado</h3>
        </DivDo>
        }
          
      </DivLeft>
      {/* <DivAside /> */}
      {modal 
      ?
        <ModalLeft/>
      :
        null
      }
    </DivAllContent>
  )
}

const mapStateToProps = state =>({
  list:state.listReducer,
})

export default connect(mapStateToProps)(ToDoList)