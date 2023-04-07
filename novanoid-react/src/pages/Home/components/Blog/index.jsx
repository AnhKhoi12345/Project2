import { faEye } from '@fortawesome/free-solid-svg-icons';
import './Blog.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Blog() {
  return (
    <div id="blog" className="blog-container">
      <h2>HOW MANY</h2>
      <hr />
      <p className="blog-outer-info">Praesent lacinia sem sed risus consectetur, et volutpat nulla bibendum.</p>
      <div className="blog-grid">
        <div className="blog-item">
          <p className="blog-header">
            <b>Ut lorem est porttitor eget fermentum</b>
          </p>
          <p className="blog-date">24 June, 2014</p>
          <p className="blog-info">
            Aenean odio massa, mattis et vestibulum ac, iaculis non lacus. Pellentesque auctor arcu vulputate est rutrum
            egestas.{' '}
          </p>
          <a href="#">
            <button>READ MORE</button>
          </a>
        </div>
        <div className="blog-item">
          <p className="blog-header">
            <b>Ut lorem est porttitor eget fermentum</b>
          </p>
          <p className="blog-date">24 June, 2014</p>
          <p className="blog-info">
            Aenean odio massa, mattis et vestibulum ac, iaculis non lacus. Pellentesque auctor arcu vulputate est rutrum
            egestas.{' '}
          </p>
          <a href="#">
            <button>READ MORE</button>
          </a>
        </div>
        <div className="blog-item">
          <p className="blog-header">
            <b>Ut lorem est porttitor eget fermentum</b>
          </p>
          <p className="blog-date">24 June, 2014</p>
          <p className="blog-info">
            Aenean odio massa, mattis et vestibulum ac, iaculis non lacus. Pellentesque auctor arcu vulputate est rutrum
            egestas.{' '}
          </p>
          <a href="#">
            <button>READ MORE</button>
          </a>
        </div>
        <div className="blog-item">
          <p className="blog-header">
            <b>Ut lorem est porttitor eget fermentum</b>
          </p>
          <p className="blog-date">24 June, 2014</p>
          <p className="blog-info">
            Aenean odio massa, mattis et vestibulum ac, iaculis non lacus. Pellentesque auctor arcu vulputate est rutrum
            egestas.{' '}
          </p>
          <a href="#">
            <button>READ MORE</button>
          </a>
        </div>
        <div className="blog-item">
          <p className="blog-header">
            <b>Ut lorem est porttitor eget fermentum</b>
          </p>
          <p className="blog-date">24 June, 2014</p>
          <p className="blog-info">
            Aenean odio massa, mattis et vestibulum ac, iaculis non lacus. Pellentesque auctor arcu vulputate est rutrum
            egestas.{' '}
          </p>
          <a href="#">
            <button>READ MORE</button>
          </a>
        </div>
        <div className="blog-item">
          <p className="blog-header">
            <b>Ut lorem est porttitor eget fermentum</b>
          </p>
          <p className="blog-date">24 June, 2014</p>
          <p className="blog-info">
            Aenean odio massa, mattis et vestibulum ac, iaculis non lacus. Pellentesque auctor arcu vulputate est rutrum
            egestas.{' '}
          </p>
          <a href="#">
            <button>READ MORE</button>
          </a>
        </div>
      </div>
      <button className="blog-read-all" id="blog-readall-button">
        <FontAwesomeIcon icon={faEye} className="icon" size="lg" /> READ ALL POST
      </button>
    </div>
  );
}
export default Blog;
