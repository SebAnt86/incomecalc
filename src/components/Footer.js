import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";


function Footer() {
  return (
   <footer>
      <Box className="footer-style"  color="white">
        <Container maxWidth="lg">
          <Box px={3} py={{xs:3, sm:6}} className="disclosure" textAlign="justify">
            The content of this website is provided for informational purposes
            only. It does not constitute legal advice and should not be relied
            upon as such. Please seek legal advice for any particular matters
            you have. Whilst we have taken all due care to provide correct
            information, the creators of this website do not accept any
            liability to anyone in relation to the use of, or reliance on, the
            information provided on this website.
          </Box>
          <Box textAlign="center" pb={3}>
             Centerlink Income Calculator &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer> 
  );
}

export default Footer;

