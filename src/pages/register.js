import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordMatchError, setPasswordMatchError] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phoneNumber' && !/^\d+$/.test(value)) {
      return; 
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError('Şifreler uyuşmuyor.');
      return;
    }
    console.log(formData);
    setPasswordMatchError('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=' py-5'>
        <div className='container'>
            <div className='row '>
                <div className='col-12 col-md-6 d-none d-lg-block m-auto' data-aos="fade-right" data-aos-duration="2000">
                    <img className='img-fluid' src="https://app.wegs.com.tr/images/pages/register-v2.svg" alt="" />
                </div>
                <div className="col-12 col-md-6 m-auto">
                <h2>Kullanıcı Kayıt Formu</h2>
                {passwordMatchError && (
                    <div className="alert alert-danger">{passwordMatchError}</div>
                )}
                <form onSubmit={handleSubmit} >
                    <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">* Adınız</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">* Soyadınız</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">* E-posta Adresiniz</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">* Telefon Numaranız</label>
                    <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="company" className="form-label">* Şirket Adınız</label>
                    <input type="text" className="form-control" id="company" name="company" value={formData.company} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="password" className="form-label">* Şifreniz</label>
                    <div className="input-group">
                        <input
                        type={showPassword ? 'text' : 'password'}
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        />
                        <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={togglePasswordVisibility}
                        >
                        {showPassword ? 'Gizle' : 'Göster'}
                        </button>
                    </div>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">* Şifrenizi Onaylayın</label>
                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="my-btn w-100">Kayıt Ol</button>
                </form>
                </div>  

            </div>

        
        </div>

    </div>


  );
}

export default RegistrationForm;
