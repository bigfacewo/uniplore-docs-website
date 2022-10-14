---
sidebar_position: 9
---
### 组件介绍
**“数据入库”（Table Writer）**控件支持把数据集写入指定数据库中。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - 无

<hr/>

### 页面介绍
点击**“数据入库”（Table Writer）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/io/table-writer/param.png) ](/img/aistudio/io/table-writer/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>数据库类型</td> 
      <td>
      连接数据库的类型（Microsoft SQL Server, PostgreSQL, MySQL, Oracle）
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

配置完成后，点击“获取表信息”按钮，将会弹出**“数据入库”（Table Writer）**控件的交互页面（如下图所示）。在交互页面中可以选择新建数据表把数据写入库中，或者选择已有表进行追加写入或覆盖写入。  
[ ![](/img/aistudio/io/table-writer/interaction.png) ](/img/aistudio/io/table-writer/interaction.png)

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据集，连接**“数据入库”（Table Writer）**控件把数据写入库中。  
[ ![](/img/aistudio/io/table-writer/workflow.png) ](/img/aistudio/io/table-writer/workflow.png)

