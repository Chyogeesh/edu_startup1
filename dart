// pubspec.yaml dependencies
dependencies:
  flutter:
    sdk: flutter
  http: ^0.13.4
  provider: ^6.0.0
  shared_preferences: ^2.0.6

// main.dart
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Educational App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  List<dynamic> contentList = [];

  @override
  void initState() {
    super.initState();
    fetchContent();
  }

  fetchContent() async {
    final response = await http.get(Uri.parse('http://localhost:8000/api/content/'));
    if (response.statusCode == 200) {
      setState(() {
        contentList = json.decode(response.body);
      });
    } else {
      throw Exception('Failed to load content');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Educational Content'),
      ),
      body: ListView.builder(
        itemCount: contentList.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(contentList[index]['title']),
            subtitle: Text(contentList[index]['description']),
            onTap: () {
              // Navigate to content details
            },
          );
        },
      ),
    );
  }
}
