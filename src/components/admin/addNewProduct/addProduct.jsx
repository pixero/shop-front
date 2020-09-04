import React from "react";
import './StyleAddProduct.sass';

export class AddProduct extends React.Component{
    render() {
        return(
            <div className="register-photo">
                <div className="form-container">
                    {/*<div className="image-holder"></div>*/}
                    <form method="post">
                        <h2 className="text-center"><strong>Добавить товар</strong>.</h2>
                        <div className="form-group"><input className="form-control" type="number"
                                                           name="ProductNamber" placeholder="Номер продукта"/>
                        </div>
                        <div className="form-group"><input className="form-control" type="text"
                                                           name="productName" placeholder="Название продукта"/>
                        </div>
                        <textarea className="form-control" placeholder="Описание продукта"></textarea>
                        <div className="form-group"><input className="form-control" type="number" name="price"
                                                           placeholder="Цена"/>
                        </div>
                            <button type="file" id="user_group_label" className="col-12"
                                                         ><i
                                className="fa fa-upload"/>&nbsp;Фото </button>
                        <button className="btn btn-primary btn-block" type="submit">Добавить</button>
                    </form>
                </div>
            </div>
        )
    }
}