import Badge from 'react-bootstrap/Badge';

// https://react-bootstrap.github.io/components/badge/
// fazer um map em staks

export default function BadgeTag() {
  const { tag } = this.props;
  return (
    <Badge pill bg="secondary">
      {tag}
    </Badge>
  )
}