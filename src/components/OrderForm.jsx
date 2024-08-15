import { Button, FormGroup, Input, Table, Label } from "reactstrap";
import { useState } from "react";

function OrderForm() {
  const initialIngredients = [
    "Pepperoni",
    "Kanada Jambonu",
    "Soğan",
    "Mısır",
    "Jalepeno",
    "Biber",
    "Ananas",
    "Sosis",
    "Tavuk Izgara",
    "Domates",
    "Sucuk",
    "Sarımsak",
    "Kabak",
    "Mantar",
  ];

  const [state, setState] = useState({
    count: 0,
    checkboxSelections: [],
    errors: "",
    availableIngredients: initialIngredients,
    size: "",
    doughThickness: "",
    specialNote: "",
    total: 85.5,
    choose: 0,
  });

  const handleSpecialNoteChange = (event) => {
    const value = event.target.value;
    setState((prevState) => ({
      ...prevState,
      specialNote: value,
    }));
  };

  const increaseCount = () => {
    setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };

  const decreaseCount = () => {
    setState((prevState) => ({
      ...prevState,
      count: Math.max(prevState.count - 1, 0),
    }));
  };

  const calculatePrice = (checkboxSelections) => {
    const price = 5;
    return checkboxSelections.length * price;
  };

  const handleCheckboxes = (event) => {
    const value = event.target.value;
    let updatedSelections = state.checkboxSelections;

    if (event.target.checked) {
      updatedSelections = [...updatedSelections, value];
    } else {
      updatedSelections = updatedSelections.filter((item) => item !== value);
    }

    const newChoosePrice = calculatePrice(updatedSelections);

    setState((prevState) => ({
      ...prevState,
      checkboxSelections: updatedSelections,
      choose: newChoosePrice,
      total: 85.5 + newChoosePrice,
    }));
  };

  const handleDoughThicknessChange = (event) => {
    const value = event.target.value;
    setState((prevState) => ({
      ...prevState,
      doughThickness: value,
    }));
  };

  const handleSizeChange = (event) => {
    const value = event.target.value;
    setState((prevState) => ({
      ...prevState,
      size: value,
    }));
  };

  const validateForm = () => {
    const { size, doughThickness, checkboxSelections, count } = state;
    let errors = "";

    if (!size) {
      errors += "Lütfen pizza boyutunu seçin. ";
    }
    if (!doughThickness) {
      errors += "Lütfen hamur kalınlığını seçin. ";
    }
    if (checkboxSelections.length < 4 || checkboxSelections.length > 10) {
      errors += "Lütfen 4 ila 10 arasında malzeme seçin. ";
    }
    if (count < 1) {
      errors += "Lütfen en az bir pizza ekleyin. ";
    }
    if (errors) {
      setState((prevState) => ({
        ...prevState,
        errors: errors,
      }));
      return false;
    }

    return true;
  };

  const submitOrder = async (event) => {
    event.preventDefault(); //

    if (!validateForm()) {
      return;
    }

    setState((prevState) => ({
      ...prevState,
      errors: "",
    }));

    const orderData = {
      size: state.size,
      doughThickness: state.doughThickness,
      ingredients: state.checkboxSelections,
      count: state.count,
    };

    try {
      const response = await axios.post(
        "https://reqres.in/api/pizza",
        orderData
      );
      console.log("API Response:", response.data);
      alert("Siparişiniz başarıyla gönderildi!");
    } catch (error) {
      console.error("API Error:", error);
      alert("Siparişiniz gönderilirken bir hata oluştu.");
    }
  };

  return (
    <div className="orderpage">
      <div className="headertop">
        <h2>Teknolojik Yemekler</h2>
        <p className="aciklama">
          Anasayfa - <b>Sipariş Oluştur</b>
        </p>
      </div>
      <form className="form" onSubmit={submitOrder}>
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
            <Label for="" className="boyut-text">
              Boyut Seç
              <span className="required-star"> *</span>
            </Label>
            <FormGroup check>
              <Input
                name="size"
                type="radio"
                value="Küçük"
                onChange={handleSizeChange}
                checked={state.size === "Küçük"}
              />{" "}
              <Label check>Küçük</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="size"
                type="radio"
                value="Orta"
                onChange={handleSizeChange}
                checked={state.size === "Orta"}
              />{" "}
              <Label check>Orta</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="size"
                type="radio"
                value="Büyük"
                onChange={handleSizeChange}
                checked={state.size === "Büyük"}
              />{" "}
              <Label check>Büyük</Label>
            </FormGroup>
          </div>
          <div className="">
            <FormGroup>
              <Label for="doughThickness" className="boyut-text">
                Hamur Seç
                <span className="required-star"> *</span>
              </Label>
              <Input
                id="doughThickness"
                name="doughThickness"
                type="select"
                onChange={handleDoughThicknessChange}
                value={state.doughThickness}
              >
                <option>Hamur Kalınlığı</option>
                <option>İnce</option>
                <option>Orta</option>
                <option>Kalın</option>
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
              {state.availableIngredients
                .slice(0, 7)
                .map((ingredient, index) => (
                  <FormGroup check inline key={index}>
                    <Input
                      type="checkbox"
                      value={ingredient}
                      onChange={handleCheckboxes}
                      disabled={
                        state.checkboxSelections.length >= 10 &&
                        !state.checkboxSelections.includes(ingredient)
                      }
                    />
                    <Label check>{ingredient}</Label>
                  </FormGroup>
                ))}
            </div>
            <div className="eksol">
              {state.availableIngredients.slice(7).map((ingredient, index) => (
                <FormGroup check inline key={index + 7}>
                  <Input
                    type="checkbox"
                    value={ingredient}
                    onChange={handleCheckboxes}
                    disabled={
                      state.checkboxSelections.length >= 10 &&
                      !state.checkboxSelections.includes(ingredient)
                    }
                  />
                  <Label check>{ingredient}</Label>
                </FormGroup>
              ))}
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
              value={state.specialNote}
              onChange={handleSpecialNoteChange}
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
                  <td>{state.choose}₺</td>
                </tr>

                <tr>
                  <th>Toplam</th>
                  <td>{state.total}₺</td>
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
              <p className="disp">{state.count}</p>
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
              disabled={
                state.checkboxSelections.length < 4 ||
                state.checkboxSelections.length > 10 ||
                state.count < 1 ||
                !state.size ||
                !state.doughThickness ||
                !state.errors
              }
            >
              SİPARİŞ VER
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default OrderForm;
