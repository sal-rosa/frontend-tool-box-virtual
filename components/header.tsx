function Header() {
    return (
        <div className="navbar bg-base-200 shadow">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Virtual Tool Box</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 z-10">
                    <li tabIndex={0}>
                        <a>
                            Conversion
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2 bg-base-200 shadow">
                            <li><a>Video</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;