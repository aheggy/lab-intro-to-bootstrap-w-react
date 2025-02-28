export default function Footer(){
    return (
        <footer className="bg-warning p-4 mt-4">
            <div className="row">
                <div className="col-lg-3 offset-lg-6">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link link-dark" href="#">
                                Contact me
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-dark" href="#">
                                About the author
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="colg-lg-3">
                    <p className="mt-2">
                        Copyright <strong>MyTravelBlog</strong>
                    </p>
                </div>
            </div>
        </footer>
    )
}