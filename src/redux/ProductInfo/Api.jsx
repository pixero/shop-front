import Axios from "axios";

export const getProductNumber = (productNumber)=>{
    return  (Axios.get('product/getNumberProduct/'+ productNumber).then(response =>{
        return response.data
    }))
}

export const getProduct = async () =>{

    return  (Axios.get('product/getInfoProduct/'+ localStorage.getItem('numberProduct'),{headers:{
            'Content-Type':'application/json'
        }})
        .then(response =>{
            return response.data
        }))
}
export const getPicture = async(pictures)=>{
    // const pictures = JSON.parse(localStorage.getItem('picture'))
    return ((Axios.get('product/getPictureProduct/'+pictures.pictureName,{responseType: 'arraybuffer'} ))
        .then(response => {
            let image = btoa(
                new Uint8Array(response.data)
                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
            );
            return `data:${response.headers['content-type'].toLowerCase()};base64,${image}`;
        }))
}