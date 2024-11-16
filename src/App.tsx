import { useState } from 'react';
import '@mantine/core/styles.css';
import {Image, Button, Container, FileButton, Group, MantineProvider, Text, Stack, TextInput, Select, ActionIcon, Divider} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { IconCheck } from '@tabler/icons-react';

export default function App() {

  const [file, setFile] = useState<File | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [birthdate, setBirthdate] = useState<Date | null>(null);
  const [gender, setGender] =useState<string | null>(null);
  const [englishLevel, setEnglishLevel] = useState<string | null>(null);
  const [city, setCity] =useState<string | null>(null);
  const [corner, setCorner] = useState<string | null>(null);
  const [isSpecialNeeds, setIsSpecialNeeds] = useState(false);

  const AddMember = () => {
    const member = {
      firstName,
      lastName,
      patronymic,
      birthdate: birthdate ? birthdate.toLocaleDateString() : null,
      gender,
      englishLevel,
      city,
      corner,
      specialNeeds: isSpecialNeeds ? 'Yes' : 'No',
      file,
    };
    console.log("New member Information:", member);
    setFile(null);
    setFirstName('');
    setLastName('');
    setPatronymic('');
    setBirthdate(null);
    setGender(null);
    setEnglishLevel(null);
    setCity(null);
    setCorner(null);
    setIsSpecialNeeds(false);
  };

 
  return (
    <MantineProvider>
      <div style={{ margin: '50px 100px' }}>
        <Group w={900} style={{ justifyContent: 'space-between', paddingBottom: '10px', marginLeft: '170px' }}>
          <Text fw={500} size="lg">
            Add member
          </Text>
          <Button color="green" onClick={AddMember}>
            Add member
          </Button>
        </Group>
        <Divider w={900} style={{ marginLeft: '170px' }} />
        <Text size="md" style={{ paddingTop: '10px', marginLeft: '170px' }}>
          Personal information
        </Text>
        <Text c="dimmed" style={{ marginLeft: '170px' }}>
          Provide photo and personal details
        </Text>
        <Container
          style={{
            width: '900px',
            backgroundColor: 'rgba(224, 224, 224, 0.22)',
            borderRadius: '8px',
            marginTop: '10px',
            padding: '20px',
          }}
        >
          <Group>
            <Container
              style={{
                border: '1px solid #ced4da',
                width: '250px',
                height: '300px',
                borderRadius: '8px',
                backgroundColor: 'white',
                margin: '0 10px 0 0',
                padding: "0"
              }}
            >
              {file ? (
                <Image
                  src={URL.createObjectURL(file)}
                  alt="Selected Image"
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px',
                  }}
                />
              ) : (
                <FileButton onChange={setFile} accept="image/png,image/jpeg">
                  {(props) => (
                    <Button {...props} style={{ margin: '130px 70px' }} variant="outline">
                      Add image
                    </Button>
                  )}
                </FileButton>
              )}
            </Container>
            
            <Stack>
              <Group grow>
                <TextInput
                  label="First name"
                  placeholder="Enter first name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextInput
                  label="Last name"
                  placeholder="Enter last name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <TextInput
                  label="Patronymic"
                  placeholder="Enter patronymic"
                  required
                  value={patronymic}
                  onChange={(e) => setPatronymic(e.target.value)}
                />
              </Group>
              <Group grow>
                <DateInput
                  label="Birthdate"
                  placeholder="01.12.1980"
                  required
                  value={birthdate}
                  onChange={setBirthdate}
                />
                <Select
                  label="Gender"
                  placeholder="Select gender"
                  data={['male', 'female']}
                  required
                  value={gender}
                  onChange={setGender}
                />
              </Group>
              <Group grow align="flex-end">
                <Select
                  label="English level"
                  description="You can select Unknown and test member later"
                  placeholder="Unknown"
                  data={['beginner', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'native']}
                  value={englishLevel}
                  onChange={setEnglishLevel}
                />
                <Select
                  label="From city"
                  placeholder="Select city"
                  data={['London', 'Bristol', 'Portsmoth']}
                  required
                  value={city}
                  onChange={setCity}
                />
              </Group>
              <Group align= "flex-end">
                <Select
                  label="American Corner"
                  placeholder="Select corner"
                  data={['first', 'second', 'third']}
                  required
                  value={corner}
                  onChange={setCorner}
                />
                <ActionIcon
                  style={{ border: '1px solid #ced4da' }}
                  variant="default"
                  size={30}
                  radius="md"
                  onClick={() => setIsSpecialNeeds((prev) => !prev)}
                >
                  {isSpecialNeeds ? <IconCheck size={20} /> : null}
                </ActionIcon>
                <Text mb="sm" size='sm'>Person with Special Needs</Text>
              </Group>
            </Stack>
          </Group>
        </Container>
      </div>
    </MantineProvider>
  );
}
