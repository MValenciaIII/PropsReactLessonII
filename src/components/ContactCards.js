



function ContactItem(contactData) {

    return (
        <div className="col-sm-6">
            <div className="row">
                <div className="col-sm-12 firstName">
                    <h3>{contactData.fName} {contactData.lName}</h3> 
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <p>Email: {contactData.email}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactItem