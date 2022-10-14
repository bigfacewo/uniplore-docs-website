---
sidebar_position: 1
---
### 组件介绍
**“数据库加载”（SQL Table）**控件支持从数据库中读取数据（目前支持 Microsoft SQL Server, PostgreSQL, MySQL, Oracle, MongoDB）。

<hr/>

- 输入：
  - 无
- 输出：
  - data：数据集

<hr/>

### 页面介绍
点击**“数据库加载”（SQL Table）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/io/sql-table/param.png) ](/img/aistudio/io/sql-table/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>类型</td> 
      <td>
      连接数据库的类型（Microsoft SQL Server, PostgreSQL, MySQL, Oracle, MongoDB）
      </td> 
      <td>PostgreSQL</td>
  </tr>
  <tr>
      <td>数据库地址</td>    
      <td>
      数据库连接地址
      </td> 
      <td>127.0.0.1</td>
  </tr>
  <tr>
      <td>端口</td>    
      <td>
      连接端口号
      </td> 
      <td>5432</td>
  </tr>
  <tr>
      <td>数据库名</td>    
      <td>
      数据库名
      </td> 
      <td>test</td>
  </tr>
  <tr>
      <td>用户名</td>    
      <td>
      数据库连接用户名
      </td>
      <td>postgres</td>
  </tr>
  <tr>
      <td>密码</td>    
      <td>
      数据库连接密码
      </td> 
      <td>123456</td>
  </tr>
</table>

配置完成后，点击“连接”按钮，将会弹出**“数据库加载”（SQL Table）**控件的交互页面（如下图所示）。在交互页面中选择所需的表名即可加载该表中的数据，进行进一步处理。  
[ ![](/img/aistudio/io/sql-table/interaction.png) ](/img/aistudio/io/sql-table/interaction.png)

### 使用案例
**“数据库加载”（SQL Table）**控件一般作为一个工作流的开端，加载数据进行相关处理。如下图所示的工作流中 ，使**“数据库加载”（SQL Table）**控件加载数据，连接**“查看数据”（Data Table）**控件查看数据。  
[ ![](/img/aistudio/io/sql-table/workflow.png) ](/img/aistudio/io/sql-table/workflow.png)

案例中配置**“数据库加载”（SQL Table）**连接mysql数据库加载数据库中 iris 数据集，案例中控件执行结果如下图所示：  
[ ![](/img/aistudio/io/sql-table/workflow-result.png) ](/img/aistudio/io/sql-table/workflow-result.png)
