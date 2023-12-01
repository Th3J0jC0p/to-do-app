import styled from "styled-components";

const FooterElement = styled.footer`
	line-height: 50px;
	text-align: center;
`;

function Footer() {
	return (
		<FooterElement>
			Jakub Oźmina &copy;{" "}
			<a href="https://github.com/Th3J0jC0p">My GitHub</a>
		</FooterElement>
	);
}

export default Footer;
