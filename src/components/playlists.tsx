import { ScrollView, SectionList, View } from 'react-native'
import { atoms as a, useTheme } from '@musical/alf'
import UParagraph from './paragraph'

const playlists = [
  {
    id: 1,
    title: 'Popular',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    id: 2,
    title: 'Top albums',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    id: 3,
    title: 'Favorite',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    id: 4,
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
]

export default function Playlists() {
  const t = useTheme()

  return (
    <SectionList
      sections={playlists}
      style={[a.px_xl, a.pt_xl]}
      keyExtractor={(item, index) => item + index}
      renderItem={() => null}
      renderSectionHeader={({ section }) => (
        <>
          <UParagraph size="lg" weight="bold">
            {section.title}
          </UParagraph>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {section.data.map((item, index) => (
              <View
                key={index}
                style={[
                  a.p_sm,
                  a.mx_sm,
                  t.atoms.bg_info_400,
                  a.my_sm,
                  { width: 200, height: 200 },
                ]}
              >
                <UParagraph>{item}</UParagraph>
              </View>
            ))}
          </ScrollView>
        </>
      )}
    />
  )
}
