import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

export type RootNavigatorParamList = {
	Home: undefined;
	Auth: undefined;
};

export type RootNavigatorProps<T extends keyof RootNavigatorParamList> =
	NativeStackNavigationProp<RootNavigatorParamList, T>;
export type RootNavigatorRouteProps<T extends keyof RootNavigatorParamList> =
	RouteProp<RootNavigatorParamList, T>;

export type RootStackParamList = {
	Home: undefined;
};
