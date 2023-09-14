import getPoster from 'getDefaultImg';
import { CastItems } from './CastDetail.styled';
const CastDetail = ({ cast: { profile_path, name, character }, id }) => {
  return (
    <CastItems key={id}>
      <img src={getPoster(profile_path)} alt="Foto_profile" width={'300px'} />
      <h3>{name}</h3>
      <p>Character:{character}</p>
    </CastItems>
  );
};

export default CastDetail;
