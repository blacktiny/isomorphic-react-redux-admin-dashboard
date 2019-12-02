import { withRouter } from 'next/router';
const ActiveLink = ({ className, children, router, href }) => {
  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a className={className} href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default withRouter(ActiveLink);
