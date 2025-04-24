import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { students, courses } from '../assets/StudentsDb';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FooterMenu from '../common/FooterMenu';
import Footer from '../common/Footer';

export default function Course() {
    const [studentData, setStudentData] = useState(null);
    const [courseData, setCourseData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const username = await AsyncStorage.getItem('username');
                const student = students.find(s => s.username === username);
                if (student) {
                    setStudentData(student);
                    setCourseData(courses.find(c => c.id === student.course_id));
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    if (!studentData || !courseData) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <PaperProvider>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.content}>
                    <Text style={styles.title}>{courseData.name}</Text>
                    <Text style={styles.subtitle}>
                        Code: {courseData.course_code} | Dept: {courseData.department}
                    </Text>
                    <View style={styles.separator} />
                    <Text style={styles.sectionTitle}>Course Information</Text>
                    {['course_code', 'department', 'duration', 'description'].map(key => (
                        <Text key={key} style={styles.info}>
                            {`${key.replace('_', ' ')}: ${courseData[key]}`}
                        </Text>
                    ))}
                    <Footer />
                </ScrollView>
                <FooterMenu currentUser={studentData} />
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' },
    content: { padding: 20 },
    loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 10 },
    separator: { height: 1, backgroundColor: '#ddd', marginVertical: 15 },
    sectionTitle: { fontSize: 20, fontWeight: '600', marginBottom: 15 },
    info: { fontSize: 16, marginBottom: 10 },
});
