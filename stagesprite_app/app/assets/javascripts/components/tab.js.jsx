class Tab extends React.Component {
    render () {
        var content = (<div></div>)
        if (this.props.currTab === "script") {
            content = (
                <div>
                    <h2>Working Script</h2>
                    <img src="http://www.neatorama.com/wp-content/uploads/2011/04/5593414671_8ab2b9af07_z.jpg" />
                </div>
            )
        }

        if (this.props.currTab === 'needs') {
            content = (
                <div>
                    <p>Roles Needed</p>
                    <ul>
                        <li>Lighting Designer</li>
                        <li>Stage Manager</li>
                        <li>Investors</li>
                        <li>Producers</li>
                    </ul>
                </div>
            )
        }

        if (this.props.currTab === 'history') {
            content = (
                <div>
                    <h2>Current State: Pre-Production</h2>
                </div>
            )
        }
        return (
            <div className="tab">
                {content}
            </div>
        )
    }
}
