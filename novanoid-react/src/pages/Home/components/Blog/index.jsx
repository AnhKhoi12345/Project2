import { faEye } from '@fortawesome/free-solid-svg-icons';
import './Blog.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Blog() {
  const hashtag = '#';
  const blogList = [
    {
      id: 1,
      title: 'Ut lorem est porttitor eget fermentum',
      date: '24 June, 2014',
      content:
        'Aenean odio massa, mattis et vestibulum ac, iaculis non lacus. Pellentesque auctor arcu vulputate est rutrum egestas.',
    },
    {
      id: 2,
      title: 'Praesent a eros at elit convallis consequat',
      date: '20 June, 2014',
      content:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras venenatis ipsum sit amet dictum ornare.',
    },
    {
      id: 3,
      title: 'Vivamus nisl urna facilisis semper',
      date: '18 June, 2014',
      content:
        'Vivamus posuere mi sed diam tincidunt lobortis. Aliquam lobortis turpis eu nulla dignissim viverra. Vivamus ornare, nibh in aliquam porttitor, orci velit.',
    },
    {
      id: 4,
      title: 'Morbi odio orci accumsan ut convallis nec',
      date: '15 June, 2014',
      content:
        'Quisque malesuada velit vel sapien sollicitudin aliquam. Sed et consequat purus. Donec lorem ante, ornare non tincidunt sit amet, ornare vitae neque.',
    },
    {
      id: 5,
      title: 'Cras rutrum enim at magna lobortis tempus',
      date: '10 June, 2014',
      content:
        'Cras sed mattis massa. Vestibulum tempor iaculis justo, ac placerat felis tempus at. Sed ac consequat tortor. Aliquam nisi ipsum, elementum.',
    },
    {
      id: 6,
      title: 'Nullam ornare tellus vel metus suscipit',
      date: '7 June, 2014',
      content:
        'Nulla facilisi. Sed mollis dolor leo, nec fringilla ipsum tristique eget. Mauris eget dignissim magna. Suspendisse potenti. Integer condimentum congue.',
    },
  ];
  return (
    <div id="blog" className="blog-container">
      <h2>HOW MANY</h2>
      <hr />
      <p className="blog-outer-info">Praesent lacinia sem sed risus consectetur, et volutpat nulla bibendum.</p>
      <div className="blog-grid">
        {blogList.map((item) => {
          return (
            <div className="blog-item" key={item.id}>
              <a href={hashtag}>
                <p className="blog-header">
                  <b>{item.title}</b>
                </p>
              </a>
              <p className="blog-date">{item.date}</p>
              <p className="blog-info">{item.content}</p>
              <a href={hashtag}>
                <button>READ MORE</button>
              </a>
            </div>
          );
        })}
      </div>
      <button className="blog-read-all" id="blog-readall-button">
        <FontAwesomeIcon icon={faEye} className="icon" size="lg" /> READ ALL POST
      </button>
    </div>
  );
}
export default Blog;
