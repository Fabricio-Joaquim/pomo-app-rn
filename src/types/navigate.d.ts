import { ParamListBase, NavigationProp } from '@react-navigation/native'
import { RouteProp } from '@react-navigation/native'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamListBase {
        Home: undefined;
        Profile: undefined;
        Login: undefined;
        Register: undefined;
    }
  }
}

export type Navigation = NavigationProp<ReactNavigation.RootParamList>;
export type Route = RouteProp<ReactNavigation.RootParamList, keyof ReactNavigation.RootParamList>;

export function useNavigate(): Navigation['navigate'];