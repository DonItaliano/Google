import "./App.css"

export default () => {

  const ImageUrl = 'https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
//alterar dimensoes conforme necessario'

    return(
      <div className="app">

            <div className="google-list">
            <img src={ImageUrl} alt='nao consegue ne' className="google-img"/>
              
                <div className="google-texto"> 
                <p>Pesquisar</p>
                </div>         
     
            </div>

      </div>
    )
}