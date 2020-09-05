import React from "react";
import './StyleAddProduct.sass';

export class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.productNumber = React.createRef();
        this.productName = React.createRef();
        this.productDecr = React.createRef();
        this.productPrice = React.createRef();
        this.file = React.createRef();
    }
    handleSubmit(event) {
        event.preventDefault()
    }

    render() {
        return (
            <div className="register-photo">
                <div className="form-container">
                    {/*<div className="image-holder"></div>*/}
                    <form
                          onSubmit={this.handleSubmit}
                          action="#">
                        <h2 className="text-center"><strong>Добавить товар</strong>.</h2>
                        <div className="form-group"><input className="form-control" type="number"
                                                           onChange={()=> this.props.updateNumber(this.productNumber.current.value)}
                                                           ref={this.productNumber}
                                                           value={this.props.state.numberProduct}
                                                           name="ProductNumber" placeholder="Номер продукта"/>
                        </div>
                        <div className="form-group"><input className="form-control" type="text"
                                                           ref={this.productName}
                                                           onChange={()=>this.props.updateName(this.productName.current.value)}
                                                           name="productName" value={this.props.state.nameProduct}
                                                           placeholder="Название продукта"/>
                        </div>
                        <textarea className="form-control" placeholder="Описание продукта"
                                  ref={this.productDecr}
                                  onChange={()=>this.props.updateDescr(this.productDecr.current.value)}
                                  value={this.props.state.descriptionProduct}
                        > </textarea>
                        <div className="form-group"><input className="form-control" type="number" name="price"
                                                           ref={this.productPrice}
                                                           onChange={()=>this.props.updatePrice(this.productPrice.current.value)}
                                                           value={this.props.state.productPrice}
                                                           placeholder="Цена"/>
                        </div>
                        <input type="file" className="form-control-file" accept="image/*"
                               onChange={(event)=>this.props.updateFile(event.target.files[0])}
                        />
                        {/*<input type="file" id="user_group_label" className="col-12 form-control-file " />*/}
                        <button className="btn btn-primary btn-block" type="submit"
                                onClick={()=>{this.props.addProduct()}}
                        >Добавить</button>
                    </form>
                     { this.props.state.response}
                </div>

            </div>
        )
    }
}