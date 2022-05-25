function CustomerSupport() {
    return(
        <>
        <main>
            <div className="container-fluid">
                    <h1>Contact Us</h1>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="What can we help you with?"className="form-control" aria-label="Text input with dropdown button"/>
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="/CustomerSupport"> Question about order</a></li>
                            <li><a className="dropdown-item" href="/CustomerSupport">General question or comment</a></li>
                            <li><a className="dropdown-item" href="/CustomerSupport">Interested in a product</a></li>
                            <li><hr className="dropdown-divider"></hr></li>
                            <li><a className="dropdown-item" href="/CustomerSupport">Interested in becoming a partner</a></li>
                            <li><a className="dropdown-item" href="/CustomerSupport">Would like to make a donation</a></li>
                        </ul>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="First Name" aria-label="First name" className="form-control" id="required"/>
                        <input type="text" placeholder="Last Name" aria-label="Last name" className="form-control" id="required"/>
                    </div>
                    <div className="mb-3">
                        <input type="email" placeholder="Email Address" className="form-control" id="inputEmail" required/>
                    </div>
                    <div className="mb-3">
                        <input type="tel" placeholder="Phone Number (optional)" className="form-control" id="phoneNumber"/>
                    </div>
                    <div className="mb-3">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Inquiry / Comment Here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea"></label>
                        </div>
                    <div class="d-grid gap-2 d-md-block">
                        <button class="btn btn-primary rounded" type="button">Submit</button>
                    </div>
                    </div>
            </div>
            </main>
        </>
    );
};
export default CustomerSupport;