import React from "react";

const ContactPage = () => {
  return (
    <div className="container-xxl">
      <div className="col-sm-12 paper my-3 p-1">
      <iframe 
      title="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.9585491140415!2d29.192888615645103!3d40.916654733006354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac4f2cfba5b59%3A0xc8730d9bf0d62400!2sEvmhome(Evim%20Mobilya%20So%C4%9Fanl%C4%B1k)!5e0!3m2!1str!2str!4v1638301532191!5m2!1str!2str"
      width="100%" 
      height="500" 
      frameborder="0">

      </iframe>
      </div>

      <div className="col-sm-12 paper p-3 text-align-left">
        <h4 className="pt-2" >BİZE ULAŞIN</h4>
        <p>
          Sormak istediğiniz her konuda bize buradan mesaj gönderebilirsiniz.
          Size ulaşabilmemiz için, tercihen e-mail adresinizi veya telefon
          numaranızdan en az birini belirtmelisiniz. En kısa sürede tarafımızdan
          iletişim kurulacaktır. İlginizden dolayı şimdiden teşekkür ederiz.
        </p>
      </div>

      <div className=" my-3 p-3 ">
        <div className="row">
          <div className="col-sm-12  paper">
            <div sm="12" className="col pt-4 d-flex">
              <div >
                <button
                  type="button"
                  className="btn btn-primary rounded-circle p-2 mx-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-telephone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                </button>
              </div>
              <div className="pl-3">
                <h6>Telefon</h6>
                <p>+0216 309 58 43</p>
              </div>
            </div>
            <hr />

            <div sm="12" className="col pt-2 d-flex">
              <div>
                <button
                  type="button"
                  className="btn btn-primary rounded-circle p-2 mx-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                  </svg>
                </button>
              </div>
              <div className="pl-3">
                <h6>E-mail</h6>
                <p>info@evmhome.com.tr</p>
              </div>
            </div>
            <hr />

            <div sm="12" className="col pt-2 d-flex">
              <div>
                <button
                  type="button"
                  className="btn btn-primary  rounded-circle p-2 mx-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </button>
              </div>
              <div className="pl-3 pb-3">
                <h6>Adres</h6>
                <p>Soğanlık Yeni Mahallesi, Atatürk Cad No: 41, 34880 Kartal/İstanbul</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
