import NavBar from './NavBar';

function Layout({ scroll, children }: { scroll? :string, children: React.ReactNode }) {
    return (
        <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
            {   scroll === 'none' ?
                <div style={{ flex: 1, display: 'flex', flexDirection:'column'}}>{children}</div>
                : <div style={{ flex: 1, overflowY: 'auto' }}>{children}</div>
            }
            <NavBar/>
        </div>
    );
}
export default Layout;