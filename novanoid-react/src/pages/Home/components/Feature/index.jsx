import './feature.scss';
import { faLeaf, faDesktop, faEye, faFont, faCodeFork, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import FeatList from './components';
function Feature() {
  const featList = [
    {
      id: 1,
      feature: 'CLEAN THEMES',
      description:
        'Nulla fringilla urna ac urna volutpat, quis congue massa dignissim. Suspendisse quis orci id dolor vehicula porta quis in dolor. Phasellus volutpat metus.',
      icon: faLeaf,
    },
    {
      id: 2,
      feature: 'FULLY RESPONSIVE',
      description:
        '          Ut magna diam, placerat ac diam et, ornare volutpat libero. Curabitur erat nisl, sollicitudin sit amet rhoncus interdum, adipiscing aliquet est.',
      icon: faDesktop,
    },
    {
      id: 3,
      feature: 'PIXELS PERFECT',
      description:
        '          Phasellus eget massa quam. Cras mi purus, accumsan id pretium sed, faucibus quis diam. Maecenas aliquet, lacus a porttitor porta, sapien.',
      icon: faEye,
    },
    {
      id: 4,
      feature: 'GOOGLE FONTS',
      description:
        '          Etiam sollicitudin tempus quam, at lacinia urna rutrum sed. Integer quis arcu quis metus sagittis feugiat. Nulla facilisi. Integer molestie nec justo in convallis.',
      icon: faFont,
    },
    {
      id: 5,
      feature: 'STRUCTURES CODE',
      description:
        '    Suspendisse nec lacus id urna mollis convallis. Sed risus massa, sodales sed porta eu, elementum ac magna. Phasellus et suscipit ipsum.',
      icon: faCodeFork,
    },
    {
      id: 6,
      feature: 'CREATIVE IDEAS',
      description:
        '          Aenean luctus, nisl et congue commodo, ligula neque fringilla lorem, quis vehicula est leo et tortor. Cum sociis natoque penatibus et magnis dis.',
      icon: faLightbulb,
    },
  ];
  return (
    <div className="feature-container">
      {featList.map((item) => {
        return <FeatList {...item} key={item.id}></FeatList>;
      })}
    </div>
  );
}

export default Feature;
