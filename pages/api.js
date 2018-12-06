import Layout from '../Components/Layout'

const API = () => (
  <div>
    <Layout>
      <div className="pannel1">
        <form className='box'>
          <p className='header'>API LOGIN</p>
          <input type='text' placeholder='Username' />
          <br />
          <input type='password' placeholder='Password' />
          <br />
          <input type='submit' value='Login' />
        </form>
      </div>
    </Layout>


    <style jsx>{`
      .header {
        font-size: 80px;
        font-family: arial;
        letter-spacing: 20px;
        text-transform: uppercase;
        color: white;
      }

      .box{
        width: 50vh;
        padding: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #191919;
        text-align: center;
      }
      .pannel1 {
        font-family: Arial;
        display: flex;
        place-items: center;
        justify-content:center;
        height: 100vh;
        margin: 0;
        padding: 0;
      }

      .box input[type = 'text'],.box input[type = 'password']{
        border:0;
        background: none;
        display: block;
        margin 20px auto;
        text-align:center;
        border: 2px solid #3498db;
        padding: 14px 10px;
        width 200px;
        outline: none;
        color: white;
        border-radius: 24px;
        transition: 0.25s;
        font-size: 20px;
      }

       .box input[type = 'text']:focus, .box input[type = 'password']:focus{
         width: 280px;
         border-color: #2ecc71;
       }

       .box input[type = 'submit']{
        border: 0;
        background: none;
        display: block;
        margin: 20px auto;
        text-align: center;
        border: 2px solid #2ecc71;
        padding: 14px 10px;
        width 200px;
        outline: none;
        color: white;
        border-radius: 24px;
        transition: 0.25s;
        cursor: pointer;
        font-size: 20px;
       }

       .box input[type = 'submit']:hover{
         background: #2ecc71;
       }
      
    `}</style>
  </div>
);

export default API;
