class Sidebar extends React.Component {
    render () {
        const height = window.innerHeight
        return (
            <div className="sidebar" style={{ height: height }}>
                <button>Follow</button>
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
}
