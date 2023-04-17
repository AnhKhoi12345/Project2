import './Service.scss';
import { faUser, faGear, faThumbsUp, faEye, faFlask, faComments } from '@fortawesome/free-solid-svg-icons';
import ServiceList from './components';
function Service() {
  const serviceList = [
    {
      id: 1,
      service: 'GET CLIENT',
      description:
        'Fusce varius pharetra nulla, eget porttitor orci. Nulla facilisi. Quisque pharetra enim nulla, a laoreet dolor malesuada ac. Donec at ipsum eu ante pellentesque.',
      icon: faUser,
    },
    {
      id: 2,
      service: 'EXECUTE ORDER',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus blandit dolor sit amet eros aliquam suscipit.',
      icon: faGear,
    },
    {
      id: 3,
      service: 'ENJOY RESULT',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus blandit dolor sit amet eros aliquam suscipit.',
      icon: faThumbsUp,
    },
    {
      id: 4,
      service: 'PIXELS PERFECT',
      description:
        'Fusce varius pharetra nulla, eget porttitor orci. Nulla facilisi. Quisque pharetra enim nulla, a laoreet dolor malesuada ac. Donec at ipsum eu ante pellentesque.',
      icon: faEye,
    },
    {
      id: 5,
      service: 'LABORATORY TESTS',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus blandit dolor sit amet eros aliquam suscipit.',
      icon: faFlask,
    },
    {
      id: 6,
      service: 'BIG COMMUNITY',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus blandit dolor sit amet eros aliquam suscipit.',
      icon: faComments,
    },
  ];
  return (
    <div id="service" className="service-container">
      <h2>OUR SERVICES</h2>
      <hr />
      <p>Praesent lacinia sem sed risus consectetur, et volutpat nulla bibendum.</p>
      <div className="service-grid">
        {serviceList.map((item) => {
          return <ServiceList {...item} key={item.id}></ServiceList>;
        })}
      </div>
    </div>
  );
}
export default Service;
