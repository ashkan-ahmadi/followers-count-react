export default function Header() {
  return (
    <>
      <header className="d-flex gap-2 justify-content-between align-items-center">
        <h1 className="mb-4">Followers</h1>
        <a href="https://github.com/ashkan-ahmadi/followers-count-react" target="_blank" rel="noopener" className="btn btn-link">
          <i class="bi bi-github" aria-hidden="true"></i>
          <span className="visually-hidden">See repo on GitHub</span>
        </a>
      </header>
    </>
  )
}
