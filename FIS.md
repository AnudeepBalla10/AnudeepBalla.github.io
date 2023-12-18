1. **How does the architecture of Spring Boot and microservices work for a project?**
   - Spring Boot simplifies Java-based application development, while microservices architecture involves breaking down applications into independent services. Communication occurs through mechanisms like RESTful APIs or message queues.

2. **What is service discovery, and why is it important in microservices?**
   - Service discovery is the automatic detection and registration of services in a distributed system. It is crucial in microservices to dynamically locate and communicate with services. Tools like Eureka or Consul are used for service discovery.

3. **What challenges have you seen in a distributed environment?**
   - Challenges include network latency, data consistency, fault tolerance, security, and monitoring.

4. **What is the purpose of an API Gateway in microservices?**
   - An API Gateway acts as a front-end server, enforcing policies and forwarding requests to appropriate microservices, providing a centralized entry point.

5. **What is containerization, and how does it relate to CI/CD?**
   - Containerization encapsulates applications and dependencies into containers. CI/CD pipelines automate building, testing, and deploying containerized applications.

6. **How do you handle database management and schema changes in microservices?**
   - Database management involves using technologies like MySQL or PostgreSQL. Schema changes are managed using tools like Liquibase or Flyway, with versioned migrations applied during deployment.

7. **What is a thread, and what are its advantages? Are threads dependent on each other?**
   - A thread is the smallest unit of execution. Advantages include improved responsiveness and resource utilization. Threads can be dependent on each other, especially when synchronization is needed.

8. **What happens if a thread accesses a locked resource?**
   - If a thread attempts to access a locked resource, it may wait for the resource to be released or be blocked, depending on the synchronization mechanism used.

9. **Write a program to print alternate tables using two threads.**
   - See the program provided in the previous response.

10. **How do you fetch the top-performing employee in each department using SQL?**
    - Use the SQL query provided in the previous response.

11. **What is an index in a database, and why is it used? What is the basic rule for indexing?**
    - An index improves data retrieval speed. The basic rule is to index columns used in WHERE clauses or JOIN conditions.

12. **If there is a composite key (empId and DeptId), will indexing work for a query like `SELECT * FROM emp WHERE deptId=5`?**
    - Yes, indexing can work on individual columns within the composite key. If there is an index on `deptId`, it will work.

13. **What are object types in a database, and what are Oracle hints in Oracle DB?**
    - Object types represent user-defined data types. Oracle hints provide directives to the query optimizer.

14. **What is the difference between `map` and `flatMap`?**
    - `map` applies a function to each element in a collection, while `flatMap` applies a function that returns a collection for each element and flattens the result into a single collection.

15. **Which collection gives the fastest search, and why is HashMap the fastest?**
    - `HashMap` provides the fastest search due to constant-time complexity for key-based operations. If all elements are in a single bucket, performance degrades to O(n).
