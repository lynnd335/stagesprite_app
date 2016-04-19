class Header extends React.Component {
    render () {
        return (
            <div className="header">
                <div className="header-row">
                    <div className="header-col">
                      <h1>{this.props.title}</h1>
                    </div>

                    <div className="header-col">
                        <div className="header-col">
                        <div className="header-row">
                            <span>
                                <strong>Genre: </strong>
                                Musical
                            </span>
                        </div>
                        <div className="header-row">
                            <span>
                                <strong>Desc: </strong>
                                {this.props.desc}
                            </span>
                        </div>
                    </div>
                    <div className="header-col">
                         <div className="header-row">
                             <span>
                                 <strong>Created By: </strong>
                                 {this.props.creator}
                             </span>
                         </div>
                     </div>
                     </div>
                </div>
            </div>
        )
    }
}
