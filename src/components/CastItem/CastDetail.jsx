import getPoster from 'getDefaultImg';

const CastDetail = ({ cast: { profile_path, name, character }, id }) => {
  return (
    <li key={id}>
      <div>
        <img src={getPoster(profile_path)} alt="Foto_profile" width={'300px'} />
        <h3>{name}</h3>
        <p>Character:{character}</p>
      </div>
    </li>
  );
};

export default CastDetail;
