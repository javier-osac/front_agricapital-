const Layout = ({ children }) => {
    return (
      <>
        <Header />
        <main className="container mt-4">{children}</main>
        <Footer />
      </>
    );
  };
  