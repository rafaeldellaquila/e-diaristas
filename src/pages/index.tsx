import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from '@material-ui/core';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import {
  FormElementsContainer,
  ProfissionalsPaper,
  ProfissionalsContainer,
} from 'ui/styles/pages/index.style';
import useIndex from 'data/hooks/pages/useIndex.page';

export default function Home() {
  const {
    cep,
    setCep,
    cepValidation,
    searchProfessionals,
    warning,
    professionals,
    search,
    loading,
    otherProfessionals,
  } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={
          'Preencha seu endereço e veja todos os profissionais da sua localidade'
        }
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            variant={'outlined'}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
          {warning && (
            <Typography color={'error'}>{warning}</Typography>
          )}
          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
            disabled={!cepValidation || loading}
            onClick={() => searchProfessionals(cep)}
          >
            {loading ? <CircularProgress size={20} /> : 'Buscar'}
          </Button>
        </FormElementsContainer>
        {search &&
          (professionals.length > 0 ? (
            <ProfissionalsPaper>
              <ProfissionalsContainer>
                {professionals.map((item, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={item.nome_completo}
                      picture={item.foto_usuario}
                      rating={item.reputacao}
                      description={item.cidade}
                    />
                  );
                })}
              </ProfissionalsContainer>
              <Container sx={{ textAlign: 'center' }}>
                {otherProfessionals > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ... e mais {otherProfessionals}
                    {otherProfessionals > 1
                      ? ' profissionais atendem '
                      : ' profissional atende '}
                    ao seu endereço.
                  </Typography>
                )}

                <Button
                  variant={'contained'}
                  color={'secondary'}
                  sx={{ mt: 5 }}
                >
                  Contratar um profissional
                </Button>
              </Container>
            </ProfissionalsPaper>
          ) : (
            <Typography align={'center'} color={'textPrimary'}>
              Ainda não temos nenhuma diarista disponível na sua
              região.
            </Typography>
          ))}
      </Container>
    </div>
  );
}
