function Footer({ reports }) {
    return (
      <footer className="py-4 bg-red-900">
        <p className="pl-2 text-xl text-red-100">{reports.length} Locations World Wide</p>
      </footer>
    );
  }
  
  export default Footer;
  