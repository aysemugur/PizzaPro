import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import {useState} from 'react';
import styled from "styled-components";


const FormArea = styled.form`
     width:420px;
     height:1488px;
     padding:28px;
     font-size:20px;
     margin:0 auto;
     display:flex;
     flex-direction:column;
     font-family:Barlow;
     font-weight:400;
     color:#5f5f5f;

`;
const HeaderTop = styled.div`
     width:100%;
     height:207px;
     background-color:rgba(206, 40, 41, 1);
     padding:81px 89px;
     color:white;
     font-size:20px;
     justify-content:center;

 `;
 const Page = styled.div`
    margin :0;
    padding:0;
    background-color:white;
    width:100vw;
    height:100vh;
 `

function OrderForm (){
     const [formData, setFormData] = useState();
     const [errors,setErrors] = useState();
    
    return (
        <Page>
    <HeaderTop>
        <h2>Teknolojik Yemekler</h2>
        <p className="aciklama">Anasayfa - <b>Sipariş Oluştur</b></p>
    </HeaderTop>
    <FormArea>
        <p className="pizzatitle">Position Absolute Acı Pizza</p>
        <div className="rating">
            <p>85.50₺</p>
            <div className="right">
            <p>4.9</p>
            <p>(200)</p>
            </div>
        </div>

        <div className="ptext"><p className="formdetail">Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
        </div>
        <div className="secbar">
            <div className="boyut-sec">
                <Label for="exampleEmail" className="boyut-text" >
                Boyut Seç
                <span className="required-star"> *</span>
            </Label>
                <FormGroup check>
            <Input
                name="radio1"
                type="radio"
            />
            {' '}
            <Label check>
            Küçük
            </Label>
            </FormGroup>
            <FormGroup check>
            <Input
                name="radio2"
                type="radio"
            />
            {' '}
            <Label check>
                Orta
            </Label>
            </FormGroup>
            <FormGroup check>
            <Input
                name="radio3"
                type="radio"
            />
            {' '}
            <Label check>
            Büyük
            </Label>
            </FormGroup>
            </div>
            <div className="boyut-sec">
                <FormGroup>
                    <Label for="exampleEmail" className="boyut-text" >
                    Hamur Seç
                    <span className="required-star"> *</span> 
                    </Label>
                    <Input
                    id="exampleSelect"
                    name="select"
                    type="select">
                    <option>
                        Hamur Kalınlığı
                    </option>
                    </Input>
                </FormGroup>
            </div>
        </div>
        <div className="ekmalzemeler">
            <Label for="ekmalz" className="boyut-text" >Ek Malzemeler</Label>
            <p className="ekmalz">En fazla 10 malzeme secebilirsiniz. 5₺</p>
            
    
        </div>
    </FormArea>
    </Page>
        
    )

}
export default OrderForm;