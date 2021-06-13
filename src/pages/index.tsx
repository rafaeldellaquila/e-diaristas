import {
  Button,
  Typography,
  Container,
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
export default function Home() {
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
          />
          <Typography color={'error'}>CEP Inválido</Typography>
          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
          >
            Buscar
          </Button>
        </FormElementsContainer>

        <ProfissionalsPaper>
          <ProfissionalsContainer>
            <UserInformation
              name={'Rafael'}
              picture={'https://github.com/rafaeldellaquila.png'}
              rating={3}
              description={'São Paulo'}
            />
            <UserInformation
              name={'Rafael'}
              picture={'https://github.com/rafaeldellaquila.png'}
              rating={3}
              description={'São Paulo'}
            />
            <UserInformation
              name={'Rafael'}
              picture={'https://github.com/rafaeldellaquila.png'}
              rating={3}
              description={'São Paulo'}
            />
            <UserInformation
              name={'Rafael'}
              picture={'https://github.com/rafaeldellaquila.png'}
              rating={3}
              description={'São Paulo'}
            />
            <UserInformation
              name={'Rafael'}
              picture={'https://github.com/rafaeldellaquila.png'}
              rating={3}
              description={'São Paulo'}
            />
            <UserInformation
              name={'Rafael'}
              picture={'https://github.com/rafaeldellaquila.png'}
              rating={3}
              description={'São Paulo'}
            />
            <UserInformation
              name={'Rafael'}
              picture={'https://github.com/rafaeldellaquila.png'}
              rating={3}
              description={'São Paulo'}
            />
            <UserInformation
              name={'Rafael'}
              picture={'https://github.com/rafaeldellaquila.png'}
              rating={3}
              description={'São Paulo'}
            />
          </ProfissionalsContainer>
        </ProfissionalsPaper>
      </Container>
    </div>
  );
}
