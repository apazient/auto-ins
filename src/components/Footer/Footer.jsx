import RRR from "../RRR.js/RRR";

const Footer = () => {
  return (
    <footer
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <RRR/>
      <div style={{width: 370, height: 282, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '64px auto 32px', gap: '20px'}}>
        {/* <div>Footer</div> */}
        <div style={{ width: 174, height: 104, backgroundColor: "white" }}>
          <img
            src="#"
            alt="LOGO AUTO-INS"
            style={{
              boxSizing: "border-box",
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <ul style={{ width: '100%', display: "flex", justifyContent: 'space-between', margin: 0, listStyle: "none"}}>
          <li>
            <p>Переваги</p>
          </li>
          <li>
            <p>Партнери</p>
          </li>
          <li>
            <p>Питання-відповідь</p>
          </li>
        </ul>
        <ul style={{ listStyle: "none", display: "flex", margin: 0, gap: '16px' }}>
          <li style={{  width: 40, height: 40, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%'}}>
            <svg style={{ width: "24", height: "24", backgroundColor: 'blue' }}></svg>
          </li>
          <li style={{  width: 40, height: 40, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%'}}>
            <svg style={{ width: "24", height: "24", backgroundColor: 'blue' }}></svg>
          </li>
          <li style={{  width: 40, height: 40, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%'}}>
            <svg style={{ width: "24", height: "24", backgroundColor: 'blue' }}></svg>
          </li>
          <li style={{  width: 40, height: 40, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%'}}>
            <svg style={{ width: "24", height: "24", backgroundColor: 'blue' }}></svg>
          </li>
        </ul>
        <p style={{margin: 0}}>&copy; ТОВ «Auto-ins», 2023. Всі права захищені.</p>
      </div>
    </footer>
  );
};

export default Footer;
