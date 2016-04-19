class InnerNav extends React.Component {
    render () {
        return (
            <div className="inner-nav">
                <div className="nav-row">
                    <a className="nav-button" onClick={this.props.changeTab.bind(null, 'history')}>
                        Project History
                    </a>
                    <a className="nav-button" onClick={this.props.changeTab.bind(null, 'script')}>
                        Script
                    </a>
                    <a className="nav-button" onClick={this.props.changeTab.bind(null, 'needs')}>
                        Needs
                    </a>
                </div>
            </div>
        )
    }
}
