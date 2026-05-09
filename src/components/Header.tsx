export default function Header() {
  return (
    <>
      <header className="d-flex gap-2 justify-content-between align-items-center">
        <h1 className="mb-4">Followers</h1>
        <a href="https://github.com/ashkan-ahmadi/followers-count-react" target="_blank" rel="noopener noreferrer" className="btn btn-link">
          <i className="bi bi-github me-2" aria-hidden={true}></i>
          See repo on GitHub
        </a>
      </header>
    </>
  )
}
