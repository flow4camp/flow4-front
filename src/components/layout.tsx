import NavBar from './NavBar';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
            <div style={{flex:1, overflowY:'auto'}}>{ children }</div>
            <NavBar/>
        </div>
    );
}
export default Layout;