import React, { useState } from 'react'
import { connect } from 'react-redux'
import { 
DivLabelInput,
DivModalContent,
Input,
Select,
Textarea,
DivButtons,
ButtonCancel,
Button,
DivModalAll,
DivHeaderModal } from './modalLeft.styles'
import { useFormik } from 'formik'
function ModalLeft({list , dispatch} = list) {
  
  function setModal(){
    const SET_MODAL = {
      type:'SET_MODAL',
      modal:false
    }
    dispatch(SET_MODAL)
  }

  function addInList(values){
    setModal()
 
    const date = new Date();
    let localDate = date.toLocaleString();
    values.data = localDate
    values.id = list.list.length + 1
    const SET_MODAL = {
      type:'SET_LIST',
      list:[...list.list , values]
    }
    dispatch(SET_MODAL)
  }

   const formik = useFormik({
     initialValues: {
       title: '', 
       detail: '',
       category: '',
       label: '',
       status: '',
      },
     onSubmit: values => {
      addInList(values)
     },
   });
  return (
    <DivModalAll>
        <DivModalContent>
            <DivHeaderModal>
                 <h2>Adicionar novo To-do</h2>
                <button onClick={()=>setModal()}>X</button>
            </DivHeaderModal>
             <form onSubmit={formik.handleSubmit}>
             <DivLabelInput>
              <label htmlFor="title">Título</label>
                <Input
                  id="title"
                  name="title"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
             </DivLabelInput>
             <DivLabelInput>
              <label htmlFor="detail">Detalhe</label>
                <Textarea
                  id="detail"
                  name="detail"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.detail}
                />
             </DivLabelInput>
              <DivLabelInput>
                <label htmlFor="category">Categoria </label>
                <Input
                  id="category"
                  name="category"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.category}
                />
              </DivLabelInput>
              <DivLabelInput>
              <label htmlFor="label">Etiqueta</label>
              <Input
                id="label"
                name="label"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.label}
              />
              </DivLabelInput>
             <DivLabelInput>
             <label htmlFor="status">Status</label>
              <Select 
              name="status" 
              id=""
              onChange={formik.handleChange}
              value={formik.values.status}
              >
                <option value="Pendente">Pendente</option>
                <option value="Concluido">Concluido</option>
              </Select>
             </DivLabelInput>
             <DivButtons>
                
              <ButtonCancel type="button" onClick={()=>setModal()}>Sair</ButtonCancel>
              <Button type="submit">Submit</Button>
             </DivButtons>
            </form>
        </DivModalContent>
    </DivModalAll>
  )
}

const mapStateToProps = state =>({
  list:state.listReducer,
})
export default connect(mapStateToProps)(ModalLeft)