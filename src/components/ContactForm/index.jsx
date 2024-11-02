import Iframe from 'react-iframe';
import '../../assets/styles/css/ContactForm.css';

export default function ContactForm() {
  // <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdsr0Dmzu-I6ir9OMcU7FNM0hNfn_mZwCJKgyUTP4Xlqg7K5A/viewform?embedded=true" width="640" height="1134" frameBorder="0" marginHeight="0" marginWidth="0">Carregando…</iframe>
  return (
    <div className="container1">
      <Iframe
        url="https://docs.google.com/forms/d/e/1FAIpQLSdsr0Dmzu-I6ir9OMcU7FNM0hNfn_mZwCJKgyUTP4Xlqg7K5A/viewform?embedded=true"
        width="640px"
        height="1240px"
        id=""
        className="contact-iframe"
        display="block"
        position="relative"
      />
    </div>
  );
}
