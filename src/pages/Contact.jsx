export const Contact = () => {
    const handleFormSubmit = (formData)=>{
        const formInputData = Object.fromEntries(formData.entries()); //power of react 19
        console.log(formInputData);
        
    }
    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>
            <div className="contact-wrapper container">
                <form action={handleFormSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        required
                        autoComplete="off"
                        placeholder="Enter Your Name"
                        name="username" />

                    <input
                        type="email"
                        className="form-control"
                        required
                        autoComplete="off"
                        placeholder="Enter Your Email"
                        name="email" />

                    <textarea
                        row="10"
                        className="form-control"
                        required
                        autoComplete="off"
                        placeholder="Enter Your Message"
                        name="message">
                    </textarea>

                    <button type="submit" value="send">Send</button>
                </form>
            </div>
        </section>

    )
}