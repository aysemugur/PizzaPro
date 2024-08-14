import { Button, Form, FormGroup, Input, Table, Label } from "reactstrap";
import { useState } from "react";
import styled from "styled-components";

const FormArea = styled.form`
  min-width: 420px;
  padding: 28px;
  font-size: 20px;
  margin: 0 auto;
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column;
  font-family: Barlow;
  font-weight: 400;
`;
const HeaderTop = styled.div`
  background-color: rgba(206, 40, 41, 1);
  padding: 5rem;
  color: white;
  font-size: 20px;
  justify-content: center;
  min-width: 540px;
`;

function OrderForm() {
  const [formData, setFormData] = useState();
  const [errors, setErrors] = useState("");
  const [count, setCount] = useState(0);
  const [checkbox, setCheckBox] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };

  const handleCheckboxes = (event) => {
    if (event.target.checked) {
      setCheckBox(checkbox + 1); // Checkbox işaretlendiğinde sayacı artırın
    } else {
      setCheckBox(checkbox - 1); // Checkbox işareti kaldırıldığında sayacı azaltın
      console.log();
    }
  };

  return (
    <div className="orderpage">
      <HeaderTop>
        <h2>Teknolojik Yemekler</h2>
        <p className="aciklama">
          Anasayfa - <b>Sipariş Oluştur</b>
        </p>
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

        <div className="ptext">
          <p className="formdetail">
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
        <div className="secbar">
          <div className="boyut-sec">
            <Label for="exampleEmail" className="boyut-text">
              Boyut Seç
              <span className="required-star"> *</span>
            </Label>
            <FormGroup check>
              <Input name="radio1" type="radio" /> <Label check>Küçük</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="radio1" type="radio" /> <Label check>Orta</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="radio1" type="radio" /> <Label check>Büyük</Label>
            </FormGroup>
          </div>
          <div className="boyut-sec">
            <FormGroup>
              <Label for="exampleEmail" className="boyut-text">
                Hamur Seç
                <span className="required-star"> *</span>
              </Label>
              <Input id="exampleSelect" name="select" type="select">
                <option>Hamur Kalınlığı</option>
              </Input>
            </FormGroup>
          </div>
        </div>
        <div className="ekmalzemeler">
          <Label for="ekmalz" className="boyut-text">
            Ek Malzemeler
          </Label>
          <p className="ekmalz">En fazla 10 malzeme secebilirsiniz. 5₺</p>

          <div className="eklist">
            <div className="eksol">
              <FormGroup check inline>
                <Input
                  type="checkbox"
                  onChange={handleCheckboxes}
                  disabled={checkbox > 10}
                />
                <Label check>Pepperoni</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  type="checkbox"
                  onChange={handleCheckboxes}
                  disabled={checkbox > 10}
                />
                <Label check>Kanada Jambonu</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  type="checkbox"
                  onChange={handleCheckboxes}
                  disabled={checkbox > 10}
                />
                <Label check>Soğan</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  type="checkbox"
                  onChange={handleCheckboxes}
                  disabled={checkbox > 10}
                />
                <Label check>Mısır</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  type="checkbox"
                  onChange={handleCheckboxes}
                  disabled={checkbox > 10}
                />
                <Label check>Jalepeno</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  type="checkbox"
                  onChange={handleCheckboxes}
                  disabled={checkbox > 10}
                />
                <Label check>Biber</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  type="checkbox"
                  onChange={handleCheckboxes}
                  disabled={checkbox > 10}
                />
                <Label check>Ananas</Label>
              </FormGroup>
            </div>

            <div className="eksol">
              <FormGroup check inline>
                <Input
                  type="checkbox"
                  onChange={handleCheckboxes}
                  disabled={checkbox > 10}
                />
                <Label check>Sosis</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  type="checkbox"
                  onChange={handleCheckboxes}
                  disabled={checkbox > 10}
                />
                <Label check>Tavuk Izgara</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  type="checkbox"
                  onChange={handleCheckboxes}
                  disabled={checkbox > 10}
                />
                <Label check>Domates</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  type="checkbox"
                  onChange={handleCheckboxes}
                  disabled={checkbox > 10}
                />
                <Label check>Sucuk</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  type="checkbox"
                  onChange={handleCheckboxes}
                  disabled={checkbox > 10}
                />
                <Label check>Sarımsak</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  type="checkbox"
                  onChange={handleCheckboxes}
                  disabled={checkbox > 10}
                />
                <Label check>Sucuk</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  type="checkbox"
                  onChange={handleCheckboxes}
                  disabled={checkbox > 10}
                />
                <Label check>Kabak</Label>
              </FormGroup>
            </div>
          </div>

          <FormGroup>
            <Label for="not" className="boyut-text">
              Sipariş Notu
            </Label>
            <Input
              id="not"
              name="not"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
            />
          </FormGroup>

          <div className="line"></div>

          <div className="board">
            <Table className="table" borderless size="sm">
              <thead>
                <tr>
                  <th>
                    <p className="boyut-text sm">Sipariş Toplamı</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Seçimler</th>
                  <td>25.50₺</td>
                </tr>
                <tr>
                  <th>Toplam</th>
                  <td>110.50₺</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <div className="buttons">
            <div className="buttongroup">
              <Button
                color="warning"
                size="sm"
                onClick={decreaseCount}
                className="opr"
              >
                -
              </Button>
              <p className="disp">{count}</p>
              <Button
                color="warning"
                size="sm"
                onClick={increaseCount}
                className="opr"
              >
                +
              </Button>
            </div>

            <Button
              color="warning"
              size="lg"
              onClick={decreaseCount}
              className="btn-lg"
              disabled={checkbox < 4 || checkbox > 10 || count <= 0}
            >
              SİPARİŞ VER
            </Button>
          </div>
        </div>
      </FormArea>
    </div>
  );
}
export default OrderForm;
